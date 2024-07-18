"use client"

import { Modal } from "@/components/modal";
import { useStoreModal } from "@/hooks/use-store-modal"; 

export const StoreModal = () => {
    const storeModal = useStoreModal(); 

    return (
        <Modal
            title="Create a new store"
            description="Add a new store to manage the products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose} 
        >
        form to create the store
        </Modal>
    );
}
