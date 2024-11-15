-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images_of_fits" (
    "fitId" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,

    CONSTRAINT "images_of_fits_pkey" PRIMARY KEY ("imageId","fitId")
);

-- AddForeignKey
ALTER TABLE "images_of_fits" ADD CONSTRAINT "images_of_fits_fitId_fkey" FOREIGN KEY ("fitId") REFERENCES "fits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images_of_fits" ADD CONSTRAINT "images_of_fits_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
