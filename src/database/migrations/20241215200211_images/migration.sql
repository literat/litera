-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image_relations" (
    "id" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "image_relations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "image_relations_entityId_entityType_idx" ON "image_relations"("entityId", "entityType");

-- CreateIndex
CREATE INDEX "image_relations_imageId_idx" ON "image_relations"("imageId");

-- AddForeignKey
ALTER TABLE "image_relations" ADD CONSTRAINT "image_relations_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;
