import React from "react";
import Link from "next/link";


function Index(){
    return(
        <>
            <h1>Página Inicial</h1>
            <Link href="./Produtos">Produtos</Link>
        </>
    );
}
export default Index;