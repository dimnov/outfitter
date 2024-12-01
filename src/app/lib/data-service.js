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

export const getAllProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return { products: data };
};
