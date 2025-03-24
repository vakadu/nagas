import type { ReactNode } from "react";
import { Toaster } from "./components/sonner";
import { TooltipProvider } from "./components/tooltip";

export const DesignSystemProvider = ({ children }: { children: ReactNode }) => (
	<>
		<TooltipProvider>{children}</TooltipProvider>
		<Toaster />
	</>
);
