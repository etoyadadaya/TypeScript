type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

// adding can
type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

// deleting can
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type tltT = ReadOrWriteBulk<Access>;

type ErrorOrSuccess = 'error' | 'success';

// adding http
type TResponse = {
    result: `http${ErrorOrSuccess}`;
};

const tltA: TResponse = {
    result: "httpsuccess",
};

const tltB: TResponse = {
    result: "httperror",
};
