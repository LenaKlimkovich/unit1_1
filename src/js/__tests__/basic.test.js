import healthStatus from "../basic";


test.each([[{name: "мaг", health: 90}, 'healthy'],
    [{name: 'мечник', health: 24}, 'wounded'],
    [{name: 'лучник', health: 15}, 'critical']
])(
    ('for %s returns $s'),
    (health, expected) => {
        const result = healthStatus(health);
        expect(result).toBe(expected);
    }
);


