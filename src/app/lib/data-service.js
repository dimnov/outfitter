import { supabase } from "./supabase";

export const getAllImagesFromFolder = async (folderName) => {
  const { data, error } = await supabase.storage.from(folderName).list();

  if (error) {
    console.error("Error fetching images:", error);
    return [];
  }

  const images = data.map((item) => {
    return {
      name: item.name,
      imageUrl: supabase.storage.from(folderName).getPublicUrl(`${item.name}`).data.publicUrl,
    };
  });

  return images;
};

export const getProductsPerPage = async (page, pageSize, filters) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  let query = supabase.from("products").select("*", { count: "exact" });
  if (filters?.category) query = query.eq("category", filters.category);
  // if (filters?.color) query = query.eq("color", filters.color);
  // if (filters?.size) query = query.eq("size", filters.size);
  if (filters?.style) query = query.eq("style", filters.style);
  if (filters?.price?.min) query = query.gte("price", filters.price.min);
  if (filters?.price?.max) query = query.lte("price", filters.price.max);

  const { data, error, count } = await query.range(start, end);

  if (error) {
    throw new Error(error.message);
  }

  return { products: data, count };
};

export const getAllProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return { products: data };
};

export const getProductCategory = async (productId) => {
  const { data, error } = await supabase
    .from("products")
    .select("category")
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data ? data.category : null;
};

export const getAllTestimonials = async () => {
  const { data, error, count } = await supabase
    .from("testimonials")
    .select("*", { count: "exact" });

  if (error) {
    throw new Error(error.message);
  }

  return { testimonials: data, count };
};

export const getAllColors = async () => {
  const { data, error } = await supabase.from("products_colors").select("color_hex");

  if (error) {
    throw new Error(error.message);
  }

  const uniqueColors = [...new Set(data.map((item) => item.color_hex))];

  return { colors: uniqueColors };
};

export const getProductsByCriteria = async (crit, ord = "asc", amount = 4) => {
  const criteria = crit === "latest" ? "created_at" : crit;
  const order = ord === "asc" ? true : false;

  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order(criteria, { ascending: order })
      .limit(amount);

    if (error) {
      console.error(error.message);
      return null;
    }

    return { products: data };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getProductDetails = async (productId) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, products_colors(*), products_reviews(*), products_images(id, image_url)")
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    productData: data,
    reviews: data.products_reviews,
    images: data.products_images,
    colors: data.products_colors,
    category: data.category,
  };
};
