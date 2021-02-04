-- CreateTable
CREATE TABLE "Donasi" (
    "sid" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "amount" INTEGER NOT NULL,
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sync" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("sid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donasi.id_unique" ON "Donasi"("id");
