import { FormWrapper } from '@/app/formComponents/FormWrapper';


export default function CharLayout({children}){
    return(
        <>         
                <FormWrapper>
                    {children}
                </FormWrapper>
        </>
    )
}