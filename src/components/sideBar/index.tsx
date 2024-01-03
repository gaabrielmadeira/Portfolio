import fotoPerfil from "../../assets/foto-perfil.png";

export const SideBar = () => {
    return (
        <aside>
            <div>
                <div>
                    <img src={fotoPerfil} alt="Retrato de Gabriel, com graffiti ao fundo" />
                </div>
                <p>Gabriel Madeira</p>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </aside>
    )
};