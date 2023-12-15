/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { judegCase } from './judegCase';
import type { judgeConfig } from './judgeConfig';

export type QuestionAddRequest = {
    answer?: string;
    content?: string;
    isDelete?: number;
    judegCase?: Array<judegCase>;
    judgeConfig?: judgeConfig;
    tags?: Array<string>;
    title?: string;
};
