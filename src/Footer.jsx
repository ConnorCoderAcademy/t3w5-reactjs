export default function Footer (props) {
    // return props.dataFromApi && <footer>
    //     <p>© CONNOR HAY 2023</p>
    //     <a href="https://github.com/ConnorCoderAcademy/t3w5-reactjs">The Github Repo</a>
    // </footer>


    // Alternative method with ternary 
    // return props.dataFromApi ? <footer>
    //     <p>© CONNOR HAY 2023</p>
    //     <a href="https://github.com/ConnorCoderAcademy/t3w5-reactjs">The Github Repo</a>
    //     </footer>
    //     :
    //     <p>Loading...</p>


        //Alternative with 
        return (props.dataFromApi && <footer>
        <p>© CONNOR HAY 2023</p>
        <a href="https://github.com/ConnorCoderAcademy/t3w5-reactjs">The Github Repo</a>
        </footer>)
       ||
        <p>Loading...</p>
}