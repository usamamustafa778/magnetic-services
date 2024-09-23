import { promises as fs } from "fs";
import path from "path";

const folderPath = path.join(process.cwd(), "public/json");

export const checkAPIJson = async ({ filePath }) => {
  try {
    const fullFilePath = path.join(folderPath, filePath);

    if (!(await fs.stat(fullFilePath).catch(() => false))) {
      return null;
    }

    const response = await fs.readFile(fullFilePath, "utf-8");
    return JSON.parse(response);
  } catch (err) {
    console.error("Error reading JSON file:", err);
    return null;
  }
};

export const saveJson = async ({ filePath, data }) => {
  try {
    const fullFilePath = path.join(folderPath, filePath);
    await fs.mkdir(path.dirname(fullFilePath), { recursive: true });
    await fs.writeFile(fullFilePath, JSON.stringify(data), "utf-8");
  } catch (err) {
    console.error("Error writing JSON file:", err);
    return null;
  }
};
