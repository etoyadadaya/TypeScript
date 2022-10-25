interface IARole {
    name: string;
}

interface IAPermission {
    endDate: Date;
}

interface IAUser {
    name: string;
    roles: IARole[];
    permission: IAPermission;
}

const IAUser: IAUser = {
    name: "Johan",
    roles: [],
    permission: {
        endDate: new Date(),
    }
};

const nameUser = IAUser['name'];
const roleNames = 'roles';
let roleNamess: 'roles' = 'roles';

type TRoles = IAUser['roles'];
type TRoles2 = IAUser[typeof roleNames];
type TRoles3 = IAUser[typeof roleNamess];

type TRole = IAUser['roles'][number];
type TDate = IAUser['permission']['endDate'];

const IARoles = ['admin', 'user', 'super-user'] as const;
type TRoles4 = typeof IARoles[number];
