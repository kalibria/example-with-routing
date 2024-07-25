import {useParams} from "react-router-dom";
import {S} from "./_styles"
import {ModelItem} from "../../data/data";

type ModelProps = {
    models: ModelItem[]
}

export const Model = ({models}:ModelProps) => {
    const params = useParams();
    const currentModel = models.find(item => item.id === Number(params.id));

    return (
        <S.ModelWrapper>
            <div>{currentModel?.collection}</div>
            <div>{currentModel?.model}</div>
            <div><img width={500} height={500} src={currentModel?.picture}/></div>
            <div>{currentModel?.price}</div>
        </S.ModelWrapper>
    )
}