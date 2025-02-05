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

export const getProductsPerPage = async (page, pageSize) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("products")
    .select("*, products_images(*)", { count: "exact" }) // Count all products for pagination
    .range(start, end); // Specify the range for pagination

  if (error) {
    throw new Error(error.message);
  }

  return { products: data, count }; // Return products and total count
};

export const getAllProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return { products: data };
};

export const getProduct = async (productId) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, products_colors(*)")
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return { productData: data };
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

export const getProductImages = async (productId) => {
  const { data, error } = await supabase
    .from("products_images")
    .select("id, image_url")
    .eq("product_id", productId);

  if (error) {
    throw new Error(error.message);
  }

  return { images: data };
};

export const getProductReviews = async (productId) => {
  const { data, error } = await supabase
    .from("products_reviews")
    .select("*")
    .eq("product_id", productId);

  if (error) {
    throw new Error(error.message);
  }

  return { reviews: data };
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
