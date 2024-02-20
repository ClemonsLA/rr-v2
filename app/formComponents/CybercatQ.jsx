export function CybercatQ(){

    return(
    <>
        <input type="hidden" name="CharId" value="C01" />
        
        <div>CERTS</div>
        <div>
            <input type="radio" name="cert" value="Sec" id="Sec"></input>
            <label>Sec+</label>
            <input type="radio" name="cert" value="Aws1" id="Aws1"></input>
            <label>AWS</label>
        </div>

        <div>BUZZWORD</div>
        <div>
            <input type="radio" name="buzzword" value="Gitops" id="Gitops"></input>
            <label>GitOps</label>
            <input type="radio" name="buzzword" value="K8s" id="K8s"></input>
            <label>K8s</label>
        </div>

    </>
    )
}