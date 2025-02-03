import { notFound } from "next/navigation";

function catchAll() : void{
  notFound()
}

export default catchAll