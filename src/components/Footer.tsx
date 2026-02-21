export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container text-center">
        <img
          src="https://github.com/techmobilesolucoes/Home/blob/main/LOGOFINAL2CORSITE.jpg?raw=true"
          alt="Tech Mobile Floripa"
          className="h-12 w-auto mx-auto mb-4 object-contain"
        />

        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">
            Tech Mobile Floripa — Assistência Técnica
          </strong>{" "}
          © {currentYear}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          São José - SC • CNPJ 47.558.493/0001-43
        </p>
      </div>
    </footer>
  );
}
