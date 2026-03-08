export function healthStatus(obj) {
if(obj.health > 50) {
    return "healthy";
} 
if(obj.health > 15 && obj.health <= 50) {
    return "wounded";
} 
    return "critical"
}

export function sortByHealth(arr) {
  return arr.map(h => h).sort((a, b) => b.health - a.health);
}

