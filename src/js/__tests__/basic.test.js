import {healthStatus} from "../basic";
import {sortByHealth} from "../basic";


test.each([[{name: "мaг", health: 90}, 'healthy'],
    [{name: 'мечник', health: 24}, 'wounded'],
    [{name: 'лучник', health: 15}, 'critical']
])(
    ('for %s returns $s'),
    (health, expected) => {
        const result = healthStatus(health);
        expect(result).toBe(expected)
    }
)


test("sortByHealth basic", () => {
    const input = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
    expect(sortByHealth(input)).toEqual([
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]);})

