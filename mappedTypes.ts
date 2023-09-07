type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier,
}


type SimpleToAccess<Type> = {
    [Property in keyof Type]: boolean;
}

type SimpleUserAccessMapped = SimpleToAccess<UserRoles>;

type ModifierToAccess<Type> = {
   +readonly [Property in keyof Type]-?: boolean;
}

type UserAccessMapped = ModifierToAccess<UserRoles>;

type HardlyModifierToAccess<Type> = {
    +readonly [Property in keyof Type as `canAccess${Capitalize<string & Property>}`]-?: boolean;
}

type HardlyUserAccessMapped = HardlyModifierToAccess<UserRoles>;


const roles: UserAccessMapped = {
    customers: true,
    projects: false,
    adminPanel: false
}
