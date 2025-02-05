import { ButtonLink } from "./ButtonLink"
export function Footer(){
    return(
        <div className="flex justify-end gap-3 m-5 mt-auto first:">
            <ButtonLink name="Manuel Carreras" href="https://manuelcarreras.netlify.app/" className="text-black mr-auto"/>
            <ButtonLink name="Github" img="github-mark.png" href="https://github.com/ManuGolem"/>
            <ButtonLink name="Linkedin" img="linkedin.png" href="https://www.linkedin.com/in/manuel-carreras-b05414265/"/>
        </div>
    )
}