import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";








import { Container, Form, Inputcontainer, Leftcontainer, Rightcontainer, Title } from "./styles"
import Logo from "../../assets/logo.png"

import { Button } from "../../components/button"





export function Login() {


    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    }).required();



    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

return (
    <Container>
        <Leftcontainer>
            <img src={Logo} />
        </Leftcontainer>
        <Rightcontainer>
            <Title>
                Olá, seja bem vindo ao <span>Dev Burguer!</span>
                <br></br>
                Acesse com seu <span> Login e senha.</span>
            </Title>

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Inputcontainer>
                    <label>Email</label>
                    <input  type="email" {...register("email")} />

                </Inputcontainer>

                <Inputcontainer>
                    <label>Senha</label>
                    <input type="password" {...register("password")}  />

                </Inputcontainer>


                <Button type="submit">
                    Entrar
                </Button>
                <p>Não possui conta? <a>Clique aqui.</a></p>
            </Form>

        </Rightcontainer>
    </Container>
    
)}
