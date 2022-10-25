type MTModifier = 'read' | 'update' | 'create';

type MTUserRoles = {
    customers?: MTModifier;
    projects?: MTModifier;
    adminPanel?: MTModifier;
};

// mapped types: MTModifierToAccess === TMUserAccess1

type MTModifierToAccess<T> = {
    [property in keyof T]: boolean;
};

// usefully hack 1

/*
     type MTModifierToAccess<T> = {
        +readonly [property in keyof T]-?: boolean; now MTUserRoles => readonly and not ?:
     };
 */

// usefully hack 2

/*
     type MTModifierToAccess<T> = {
        +readonly [property in keyof T as `canAccess${string & Property}`]-?: boolean; now MTUserRoles => readonly and not ?:

        ```
        type UserAccess2 = {
            readonly canAccesscustomers: boolean;
            ...
            ...
        }
        ```

     };
 */

type TMUserAccess1 = {
    customers?: boolean;
    projects?: boolean;
    adminPanel?: boolean;
};

type TMUserAccess2 = MTModifierToAccess<MTUserRoles>; // final map
