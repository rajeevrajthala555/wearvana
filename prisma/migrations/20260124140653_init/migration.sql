-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "sizes" TEXT NOT NULL,
    "ukSizes" TEXT,
    "condition" TEXT NOT NULL DEFAULT 'New',
    "deliveryTime" TEXT NOT NULL DEFAULT '7-10 days',
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isLimited" BOOLEAN NOT NULL DEFAULT false,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("brand", "condition", "createdAt", "deliveryTime", "description", "id", "image", "isLimited", "name", "price", "sizes", "stock", "ukSizes", "updatedAt") SELECT "brand", "condition", "createdAt", "deliveryTime", "description", "id", "image", "isLimited", "name", "price", "sizes", "stock", "ukSizes", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
