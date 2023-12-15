/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { judegCase } from './judegCase';
import type { judgeConfig } from './judgeConfig';

export type QuestionEditRequest = {
    answer?: string;
    content?: string;
    id?: number;
    judegCase?: Array<judegCase>;
    judgeConfig?: judgeConfig;
    tags?: Array<string>;
    title?: string;
};
