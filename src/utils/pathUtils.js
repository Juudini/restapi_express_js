import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

// Get the current file's path
const currentFilePath = fileURLToPath(import.meta.url);

// Get the current directory (src/utils)
const currentDir = dirname(currentFilePath);

// Go up one level to reach the src folder
const rootDir = join(currentDir, "..");

// Go up two levels over src folder
export const rootDirOverSrc = join(currentDir, "../../");

export const __dirname = rootDir;
