-- CreateTable
CREATE TABLE "Donasi" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "amount" INTEGER NOT NULL,
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "synced" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("id")
);
