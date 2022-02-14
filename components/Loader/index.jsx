import React from 'react'

const Loader = () => {
    return (
        <div className=" flex min-h-screen dark:bg-slate-800 flex-col justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    margin: "auto",
                    display: "block",
                    shapeRendering: "auto",
                }}
                width={200}
                height={200}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx={50}
                    cy={50}
                    r={0}
                    fill="none"
                    stroke="#e90c59"
                    strokeWidth={2}
                >
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0;40"
                        keyTimes="0;1"
                        keySplines="0 0.2 0.8 1"
                        calcMode="spline"
                        begin="0s"
                    />
                    <animate
                        attributeName="opacity"
                        repeatCount="indefinite"
                        dur="1s"
                        values="1;0"
                        keyTimes="0;1"
                        keySplines="0.2 0 0.8 1"
                        calcMode="spline"
                        begin="0s"
                    />
                </circle>
                <circle
                    cx={50}
                    cy={50}
                    r={0}
                    fill="none"
                    stroke="#46dff0"
                    strokeWidth={2}
                >
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0;40"
                        keyTimes="0;1"
                        keySplines="0 0.2 0.8 1"
                        calcMode="spline"
                        begin="-0.5s"
                    />
                    <animate
                        attributeName="opacity"
                        repeatCount="indefinite"
                        dur="1s"
                        values="1;0"
                        keyTimes="0;1"
                        keySplines="0.2 0 0.8 1"
                        calcMode="spline"
                        begin="-0.5s"
                    />
                </circle>
            </svg>
        </div>
    )
}

export default Loader