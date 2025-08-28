export type Choice = {
label: string
toScreenId: string
}


export type Result = {
title: string
summary: string
effects?: string[]
nextPhaseId?: string
}


export type Screen = {
id: string
title?: string
backgroundUrl: string
characterUrl?: string
speaker?: string
texts: string[]
choices?: Choice[]
result?: Result
}


export type Phase = {
id: string
title: string
startScreenId: string
screens: Screen[]
}


export type Story = {
phases: Phase[]
}

