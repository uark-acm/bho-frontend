import { BHOItem } from '@uark-acm/bho-data-models/lib'
/*
id
name
in_stock
description
category_id
size
image
set_id
*/
export const BHOItems: BHOItem[] = [
    {
        id: 1,
        name: 'Soft Black Blazer 1',
        in_stock: true,
        description: 'stuff',
        category_id: 3,
        size: 'S',
        image: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=700',
    },
    {
        id: 2,
        name: 'Soft Black Blazer 2',
        in_stock: true,
        description: 'stuff',
        category_id: 3,
        size: 'M',
        image: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=700',
    },
    {
        id: 3,
        name: 'Soft Black Blazer 3',
        in_stock: true,
        description: 'stuff',
        category_id: 3,
        size: 'L',
        image: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=700',
    },
    {
        id: 4,
        name: 'Soft Black Blazer 4',
        in_stock: false,
        description: 'stuff',
        category_id: 3,
        size: 'S',
        image: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=700',
    },
]
