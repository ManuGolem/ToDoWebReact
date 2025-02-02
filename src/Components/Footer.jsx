import { Button } from "./Button"
export function Footer(){
    return(
        <div className="flex justify-end gap-3 m-5 mt-auto">
            <Button name="Github" img="/github-mark.png" href="https://github.com/ManuGolem"/>
            <Button name="Linkedin" img="/linkedin.png" href="https://www.linkedin.com/in/manuel-carreras-b05414265/"/>
            <Button name="Manuel Carreras" href="https://manuelcarreras.netlify.app/"/>
        </div>
    )
}