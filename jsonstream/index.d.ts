// Type definitions for JSONStream 0.8
// Project: http://github.com/dominictarr/JSONStream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



export interface Options {
    recurse: boolean;
}

export declare function parse(pattern?: any | any[]): NodeJS.ReadWriteStream;

export declare function stringify(): NodeJS.ReadWriteStream;
export declare function stringify(open: string, sep: string, close: string): NodeJS.ReadWriteStream;

export declare function stringifyObject(): NodeJS.ReadWriteStream;
export declare function stringifyObject(open: string, sep: string, close: string): NodeJS.ReadWriteStream;
