// null, undefined, boolean, number, string, object, symbol

function createFrameworkManager() {
    const fw = ['Python', 'PostgreSQL']
    return {
        add: function(framework) {
            fw.push(framework)
        },
        print: function() {
            console.log(fw.join(', '))
        }
    }
}
manager = createFrameworkManager()
console.log(manager)
manager.print()
manager.add('JS')
manager.print()