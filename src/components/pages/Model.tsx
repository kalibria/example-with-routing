import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {S} from "./_styles"

export const Model = () => {
    const params = useParams();
    const currentModel = adidasArr.find(item => item.id === Number(params.id));
    console.log(currentModel);

    return (
        <S.ModelWrapper>
            <div>{currentModel?.collection}</div>
            <div>{currentModel?.model}</div>
            <div><img width={500} height={500} src={currentModel?.picture}/></div>
            <div>{currentModel?.price}</div>
        </S.ModelWrapper>
    )
}