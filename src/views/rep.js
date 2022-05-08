import React from "react";
import "./home.css"
import Cards from './../components/cards'

const Rep = () =>{
    return(
        <>
            <nav className="is-flex is-justify-content-center baloo2">
                <div className="busca is-flex is-flex-direction-row">

                    <div class="field is-grouped">
                        <div class="cidade field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Digite o nomde da cidade ou da república"/>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <div class="select">
                                    <select class="tipo">
                                        <option>Tipo</option>
                                        <option>Feminina</option>
                                        <option>Masculina</option>
                                        <option>Mista</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="control">
                            <button class="buscar button is-link" style={{background: "#6E2594", color: "#F6F6F6"}}>Submit</button>
                        </div>

                    </div>
                </div>
            </nav>

            <nav className="is-flex is-justify-content-center baloo2">
                <div className="repCards px-6 is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <Cards nome={'República Xeruléu'}
                            rua={'Pererê Paraná'} 
                            numero={666} 
                            bairro={'Na Nave'} 
                            estado={'EC'} 
                            moradores={5} 
                            rep={'r'} 
                            tipo={'fem'}
                            imagem={'https://bulma.io/images/placeholders/1280x960.png'}/>
                    <Cards nome={'República Xablau'} 
                            rua={'Pererê Paraná'} 
                            numero={666} 
                            bairro={'Na Nave'} 
                            estado={'EC'} 
                            moradores={3} 
                            rep={'p'} 
                            tipo={'masc'}
                            imagem={'https://bulma.io/images/placeholders/1280x960.png'}/>
                    <Cards nome={'República Xulép'} 
                            rua={'Pererê Paraná'} 
                            numero={666} 
                            bairro={'Na Nave'} 
                            estado={'EC'} 
                            moradores={10} 
                            rep={'r'} 
                            tipo={'mista'}
                            imagem={'https://bulma.io/images/placeholders/1280x960.png'}/>
                </div>
            </nav>
        </>
    )
}

export default Rep