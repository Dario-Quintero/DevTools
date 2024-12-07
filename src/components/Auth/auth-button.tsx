import { Github } from "lucide-react";

import { Button } from "@components/ui/button";

export function AuthButton() {
  return (
    <Button variant="secondary" className="border border-black/20" size="lg">
      <Github size={64} />
      <span className="font-medium">Iniciar sesión con Github</span>
    </Button>
  );
}
