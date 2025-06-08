import React, { Suspense } from "react";
import "./Href.css";
import Link from "next/link";

type HrefProps = {
  para?: string;
};

const Href: React.FC<HrefProps> = ({ para }) => {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Carregando...<div className="spinner"></div>
            </div>
          </>
        }
      >
        <Link
          className="go-to-service"
          href={para || "/"}
          title="Saiba Mais"
        >
          Saiba Mais
        </Link>
      </Suspense>
    </div>
  );
};

export default Href;
