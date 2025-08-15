"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Trash2, X } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function ConfirmationModal({ isOpen, onClose, onConfirm, title, description }: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#111827] border-red-500/50 text-white max-w-md p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
                <DialogTitle className="text-xl font-bold text-white">{title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6">
            <DialogDescription className="text-slate-400 mb-6">
                {description}
            </DialogDescription>
            <DialogFooter className="flex gap-4">
                <Button variant="outline" onClick={onClose} className="flex-1">
                    Cancel
                </Button>
                <Button variant="destructive" onClick={onConfirm} className="flex-1">
                    <Trash2 className="w-4 h-4 mr-2"/>
                    Delete Entry
                </Button>
            </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}