import { create } from "zustand";

interface RollingPaperModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;

    isClosing: boolean;
    setIsClosing: (isClosing: boolean) => void;
}

export const useRollingPaperModalVisible = create<RollingPaperModalProps>((set) => ({
    visible: false,
    setVisible: (visible: boolean) => set({ visible }),

    isClosing: false,
    setIsClosing: (isClosing: boolean) => set({ isClosing }),
}));