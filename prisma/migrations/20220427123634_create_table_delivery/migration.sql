-- CreateTable
CREATE TABLE "delivery" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finish_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT NOT NULL,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
