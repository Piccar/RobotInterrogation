import * as React from 'react';
import { InterviewPosition, Direction } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { InterferenceSolution } from './elements/InterferenceSolution';
import { InterferencePattern } from './elements/InterferencePattern';
import { PacketDisplay } from './elements/PacketDisplay';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Typography } from '@material-ui/core';
import { Help } from './elements/Help';

interface IProps {
    position: InterviewPosition;
    packet: string;
    role: ISuspectRole;
    shown: boolean;
    connections?: Direction[][];
    content?: string[][];
    solution?: string[];
}

export const SpectatorInducerDisplay: React.FunctionComponent<IProps> = props => {
    const correctTense = props.shown ? 'has been' : 'is about to be';
        
    return (
        <Page>
            <PositionHeader position={props.position} />

            <PacketDisplay packet={props.packet} />

            <Typography>Das <Help entry="inducer">Induktionsmittel</Help> wurde {correctTense} verabreicht.<br/>Rolle des Verdächtigen: <Help entry="roles">Rolle</Help>:</Typography>
            <SuspectRole role={props.role} />

            {props.solution ? <InterferenceSolution solution={props.solution} /> : undefined}
            {props.connections !== undefined && props.content !== undefined ? <InterferencePattern connections={props.connections} content={props.content} /> : undefined}

            <P>Der Verdächtige wird nun die Frage des Interviewers beantworten.<br />Wenn er richtig antwortet, darf er seinen <Help entry="background">Hintergrund</Help> auswählen.</P>
        </Page>
    )
}
