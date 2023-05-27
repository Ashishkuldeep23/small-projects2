import React from "react";

import "./first.css"

import { useState } from "react";


const First = ({ setcolor, color }) => {

    const [dark, setdark] = useState(false)

    return (
        <>
            <div style={ { padding : " 0 0  7vh 0" } }>


                <div className="dark">
                    <button
                        style={{ backgroundColor: (dark ? "white" : "black"), color: (dark ? "black" : "white") }}
                        onClick={() => { setdark(!dark); setcolor(!color); }}>
                        {dark ? "Ligth" : "Dark"}
                    </button>
                </div>

                <div className="first" style={{ backgroundColor: (dark ? "black" : "white"), color: (dark ? "white" : "black") , borderRadius:"2vh" }}>

                    <hr />

                    <h1 style={ {color: (dark ? "yellow" : "red")} }>Hello World , I'm First Project with vite react app.</h1>

                    <hr />


                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim perferendis laudantium amet commodi, maxime sint voluptas non necessitatibus deleniti aliquid reiciendis ad atque ab itaque, dignissimos quasi, aut iusto molestias culpa rerum repellat fugiat? Tempore excepturi tenetur sint fugiat voluptatibus expedita veritatis aut eos dicta, in illum recusandae ducimus reprehenderit nulla nihil aspernatur sunt similique soluta velit maiores ipsum. Quo commodi, eos at doloribus neque odit amet itaque, incidunt nam vitae dolorum accusamus eum sapiente suscipit maxime repudiandae quos expedita quaerat tempora harum impedit alias corporis repellendus! Minus tenetur harum incidunt non quaerat eveniet, natus reiciendis unde culpa quia nisi illo, dicta in nam itaque laboriosam facilis magni velit doloribus rem? Voluptatum sint, eveniet animi veritatis facilis vitae, doloribus quo cum tenetur, aliquam consequatur? Temporibus cupiditate at dolorem expedita beatae in, ducimus accusantium dolorum repellendus esse magnam, sint quibusdam, quos animi nesciunt? Quisquam sed odit ea quam velit dolore adipisci similique a unde, dolor voluptates voluptate qui incidunt deleniti reiciendis atque dolorem magni. Id asperiores vitae ad nemo, excepturi quisquam! Nobis delectus vero molestias reprehenderit soluta non voluptatum veritatis ex. Dolore impedit ducimus distinctio vitae eum fugit architecto totam similique, corrupti consectetur ea provident est sunt quidem praesentium. Temporibus.</p>

                    <hr />

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium illo ratione eveniet aliquam vel reiciendis sit consequuntur cupiditate doloribus reprehenderit minus architecto sunt enim soluta, iure incidunt debitis voluptatem ut harum sint molestias perspiciatis alias itaque! Quibusdam vero veritatis ducimus, dolorum quia accusamus hic laborum quam. Ipsum iure similique quis saepe tenetur facere a maxime doloremque quia nobis velit veniam quod placeat, nulla aspernatur possimus reprehenderit delectus aliquid unde ex. Voluptatum sit consequuntur ratione fuga laboriosam! Deserunt in molestiae, et facilis laboriosam debitis veniam ipsam animi, libero, possimus unde praesentium. Dolore velit quasi rem? Nesciunt tenetur quo cum ex dolorum. Voluptates fugiat accusamus consequuntur laudantium nobis, distinctio sint molestiae esse temporibus, reiciendis ipsum alias quaerat laboriosam dolorum labore placeat soluta odit ratione repellendus, quia necessitatibus ad rem unde numquam? Exercitationem, laborum numquam nihil voluptatibus officiis iusto qui fugit quae rem delectus iure repellat dolorum id sunt neque? Odio corporis, dolorem quisquam ratione, asperiores cum quo molestias voluptates sed praesentium deserunt obcaecati. Blanditiis optio sint eos non id? Minima necessitatibus ipsam cupiditate enim vero odit consequuntur quasi repellendus quidem omnis illum debitis, voluptatem veniam exercitationem sint natus provident non officiis sed assumenda iste aliquam, nesciunt temporibus. Laudantium dicta voluptates labore ratione provident accusantium ab dolorem aperiam, modi id non a architecto debitis corporis officiis numquam molestiae nesciunt assumenda quia quibusdam. Explicabo, id officiis cumque voluptatem omnis sunt minima possimus ut quaerat est vero inventore culpa doloribus voluptas accusamus aut quia facilis dolorem in facere, illo deserunt! Dolor aliquam nemo, aut, similique ex, tempora doloremque ab laboriosam consequatur perferendis enim nobis nihil suscipit incidunt quaerat! Neque ipsam quos necessitatibus natus quidem? Amet, quibusdam ad eius ea quam minima! Quae, libero sapiente. Iste excepturi ex corrupti eum quos repudiandae animi quaerat, officiis ad fuga nihil est aliquid, architecto sint at eligendi eos! Similique fugiat id, voluptatum qui optio voluptates accusantium ea quae delectus eveniet adipisci nemo culpa a minus voluptate deserunt corporis omnis nulla facere recusandae ipsa. Repudiandae minus esse facere ex dolore, similique voluptate, vitae magnam expedita voluptatum nesciunt porro cum? Officia laudantium laborum odio ipsam amet, ipsa repellat nostrum vel enim asperiores dolorem nobis provident ad aliquid explicabo id ab animi iste. Aspernatur labore quas eligendi, quisquam maiores voluptatem magnam? Laboriosam, aliquid minus eum exercitationem quam quod dolorum. Voluptatum id odio, fuga hic labore soluta accusantium nihil incidunt ipsa voluptatem repellendus a unde quas mollitia deleniti molestias doloribus cum fugiat exercitationem eius veritatis laudantium! Mollitia, eius. Animi adipisci perferendis velit sit asperiores pariatur autem tempore ipsum at dolore odit atque placeat facere a ea vero, repellat alias omnis labore voluptatibus veritatis nisi natus accusantium? Tempora enim, perspiciatis eius dolorem minus, repellendus mollitia eligendi pariatur non culpa tempore ab laboriosam quibusdam, assumenda a? Consequuntur minus, dolore, dolorem omnis odio, in qui libero quas hic sit distinctio! Harum, aperiam quas odio placeat tempora at culpa rerum, officiis excepturi dolores quam amet temporibus impedit nesciunt quidem laborum autem voluptatum quaerat mollitia explicabo odit deleniti ullam itaque saepe. Delectus, tempore a! Nulla, tempora rem!</p>

                    <hr />

                    <p style={{ textAlign: "end", color: (dark ? "yellow" : "blue") }}> Thank You , Ashish!</p>
                </div>

            </div>


        </>
    )

}

export default First