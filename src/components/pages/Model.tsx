import {useParams, useLoaderData} from "react-router-dom";
import {S} from "./_styles"
import {ModelItem} from "../../data/data";


type ModelProps = {
    models: ModelItem[]
}

interface LoaderData {
    models: ModelItem[];
}

export const Model = () => {
    const {models} = useLoaderData() as LoaderData;
    console.log("models", models)
    const params = useParams();
    console.log("params", params)
    const currentModel = models.find(item => item.id === Number(params.id));

    return (
        <S.ModelWrapper>
            {currentModel ? (
                <>
                    <div>{currentModel?.collection}</div>
                    <div>{currentModel?.model}</div>
                    <div><img width={500} height={500} src={currentModel?.picture}/></div>
                    <div>{currentModel?.price}</div>
                </>
            ) : <h2>No such model exists</h2>
            }
        </S.ModelWrapper>
    )
}