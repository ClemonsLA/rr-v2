'use client'
import {useState} from "react"
import DisplayDivComp from "@/app/formComponents/DisplayDivComp"

export function CybercatQ(){

    return(
    <>
        <input type="hidden" name="CharId" value="C01" />
        
        <div className="text-center text-slate-300">CHARACTER TRAITS: YOE </div>
        <div className="grid grid-cols-2 mb-5">
            <div className="grid place-content-center">
                <input type="radio" name="yoe" value="2 years" id="2 years"></input>
                <label>less than 2 years</label>
            </div>
            <div className="grid place-content-center">
                <input type="radio" name="yoe" value="20 years" id="20 years"></input>
                <label>more than 20 years</label>
            </div>
        </div>
       
        <div className="text-center text-slate-300">CHARACTER TRAITS: Salary </div>
        <div className="grid grid-cols-2 mb-5">
            <div className="grid place-content-center">
                <input type="radio" name="salary" value="60k" id="60k"></input>
                <label>60k</label>
            </div>
            <div className="grid place-content-center">
                <input type="radio" name="salary" value="150k" id="150k"></input>
                <label>150k</label>
            </div>
        </div>

        <div className="text-center text-slate-300">CERTS</div>
        <div className="grid grid-cols-2 mb-5">
            <div className="grid place-content-center">
                <input type="radio" name="cert" value="Sec" id="Sec"></input>
                <label>Sec+</label>
            </div>
            <div className="grid place-content-center">
                <input type="radio" name="cert" value="Aws1" id="Aws1"></input>
                <label>AWS</label>
            </div>
        </div>

        <div className="text-center text-slate-300 text-slate-300">BUZZWORD</div>
        <div className="grid grid-cols-2 mb-5">
            <div className="grid place-content-center">
                <input type="radio" name="buzzword" value="Gitops" id="Gitops"></input>
                <label>GitOps</label>
            </div>
            <div className="grid place-content-center">
                <input type="radio" name="buzzword" value="K8s" id="K8s"></input>
                <label>K8s</label>
            </div>
        </div>

        <div className="text-center text-slate-300">CHARACTER TRAITS: clearance </div>
        <div className="grid grid-cols-2 mb-5">
            <div className="grid place-content-center">
                <input type="radio" name="clearance" value="secret" id="secret"></input>
                <label>secret</label>
            </div>
            <div className="grid place-content-center">
                <input type="radio" name="clearance" value="TS" id="TS"></input>
                <label>TS</label>
            </div>
        </div>
    </>
    )
}