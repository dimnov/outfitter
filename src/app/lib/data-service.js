import { supabase } from "./supabase";

export async function getAllImagesFromFolder(folderName) {
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
}

export const getProductsPerPage = async (page, pageSize) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("products")
    .select("*", { count: "exact" }) // Count all products for pagination
    .range(start, end); // Specify the range for pagination

  if (error) {
    throw new Error(error.message);
  }

  return { products: data, count }; // Return products and total count
};

export const getProduct = async (productId) => {
  const { data, error } = await supabase.from("products").select("*").eq("id", productId);

  if (error) {
    throw new Error(error.message);
  }

  return { product: data };
};

export const getAllTestimonials = async () => {
  const { data, error } = await supabase.from("testimonials").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return { testimonials: data };
};
