var plugin_data = {
	id: 'player_model_generator',
	title: 'Player Model Generator Dev',  
	icon: 'accessibility',
	author: 'Wither, dragonmaster95 and 3XH6R',
	description: 'Generates player shaped models.',
    version: '2.0.0',
    min_version: '2.0.0',
	variant: 'both'
}

var modelDropdown = `Player Model: 
<select style="color:var(--color-text)" id="player_model_list">
<option value="steve">Steve (Classic)</option>
<option value="alex">Alex (Slim)</option>
<option value="cape">Cape</option>
</select>`;

var playerModelSettings = new Dialog({
    title: 'Choose Model',
    id: 'playerModelSettings',
    lines: [
        modelDropdown,
        '<br>Generate Second Layer <input type="checkbox" id="second_layer" checked>',
        '<br>&nbsp;'
    ]
});

var capeInfo = new Dialog({
    title: 'Cape Texture Warning',
    id: 'cape_warning',
    lines: [
        'You might need to edit your cape texture <br>to a square format(32x32) to make it work in-game!<br> <a class="open-in-browser" style="text-decoration: underline;" href="https://raw.githubusercontent.com/GitWither/Player-Model-Generator/master/cape_texture.png" download="cape_texture.png">Click here</a> to get the texture template.',
        '<br>&nbsp;'
    ]
});

Toolbars.outliner.add(new Action({
    id: 'generate_player_model',
    name: 'Generate Player Model',
    icon: 'accessibility',
    description: 'Generate a player shaped model',
    click: function(ev) {
        playerModelSettings.show()
    }
}));

function setDisplay() {
    loadSlot('head')
    display['head'].scale = [1.6, 1.6, 1.6]
    display['head'].translation = [0, -30, 0]
}

function generateSteve(){
    steveGroup = new Group('steve').addTo('root')
    var steveRightLeg = new Cube({name: 'right_leg', from: [4.0, -0.5, 6.0], to: [8.0, 11.5, 10.0], display: {autouv: false}, faces: {north: {uv: [3.01, 5.01, 3.99, 7.99]}, south: {uv: [1.01, 5.01, 1.99, 7.99]}, east: {uv: [2.01, 5.01, 2.99, 7.99] }, west: {uv: [0.01, 5.01, 0.99, 7.99] }, down: {uv: [2.01, 4.99, 2.99, 4.01]}, up: {uv: [1.01, 4.01, 1.99, 4.99]}}}).addTo(steveGroup)
    var steveLeftLeg = new Cube({name: 'left_leg', from: [8.0, -0.5, 6.0], to: [12.0, 11.5, 10.0], display: {autouv: false}, faces: {north: {uv: [8.01, 13.01, 6.99, 15.99]}, south: {uv: [5.01, 13.01, 5.99, 15.99]}, east: {uv: [6.01, 13.01, 6.99, 15.99] }, west: {uv: [4.01, 13.01, 4.99, 15.99] }, down: {uv: [6.01, 12.99, 6.99, 12.01]}, up: {uv: [5.01, 12.01, 5.99, 12.99]}}}).addTo(steveGroup)
    var steveBody = new Cube({name: 'body', from: [4.0, 11.5, 6.0], to: [12.0, 23.5, 10.0], display: {autouv: false}, faces: {north: {uv: [8.01, 5.01, 9.99, 7.99]}, south: {uv: [5.01, 5.01, 6.99, 7.99]}, east: {uv: [7.01, 5.01, 7.99, 7.99] }, west: {uv: [4.01, 5.01, 4.99, 7.99] }, down: {uv: [7.01, 4.99, 8.99, 4.01]}, up: {uv: [5.01, 4.01, 6.99, 4.99]}}}).addTo(steveGroup)
    var steveHead = new Cube({name: 'head', from: [4.0, 23.5, 4.0], to: [12.0, 31.5, 12.0], display: {autouv: false}, faces: {north: {uv: [6.009375, 2.009375, 7.9890625, 3.9890625]}, south: {uv: [2.01, 2.01, 3.99, 3.99]}, east: {uv: [4.01, 2.01, 5.99, 3.99] }, west: {uv: [0.01, 2.01, 1.99, 3.99] }, down: {uv: [4.01, 1.99, 5.99, 0.01]}, up: {uv: [2.01, 0.01, 3.99, 1.99]}}}).addTo(steveGroup)
    var steveRightArm = new Cube({name: 'right_arm', from: [0.0, 11.5, 6.0], to: [4.0, 23.5, 10.0], display: {autouv: false}, faces: {north: {uv: [13.01, 5.01, 13.99, 7.99]}, south: {uv: [11.01, 5.01, 11.99, 7.99]}, east: {uv: [12.01, 5.01, 12.99, 7.99] }, west: {uv: [10.01, 5.01, 10.99, 7.99] }, down: {uv: [12.01, 4.99, 12.99, 4.01]}, up: {uv: [11.01, 4.01, 11.99, 4.99]}}}).addTo(steveGroup)
    var steveLeftArm = new Cube({name: 'left_arm', from: [12.0, 11.5, 6.0], to: [16.0, 23.5, 10.0], display: {autouv: false}, faces: {north: {uv: [11.01, 13.01, 11.99, 15.99]}, south: {uv: [9.01, 13.01, 9.99, 15.99]}, east: {uv: [10.01, 13.01, 10.99, 15.99] }, west: {uv: [8.01, 13.01, 8.99, 15.99] }, down: {uv: [10.01, 12.99, 10.99, 12.01]}, up: {uv: [9.01, 12.01, 9.99, 12.99]}}}).addTo(steveGroup)
    elements.push(steveLeftArm)
    elements.push(steveRightArm)
    elements.push(steveHead)
    elements.push(steveLeftLeg)
    elements.push(steveRightLeg)
    elements.push(steveBody)

    if ($('#second_layer').checked = true) {
        var steveHead2 = new Cube({name: 'head_2nd_layer', from: [3.5, 23.0, 3.5], to: [12.5, 32.0, 12.5], display: {autouv: false}, faces: {north: {uv: [14.01, 2.01, 15.99, 3.99]}, south: {uv: [10.01, 2.01, 11.99, 3.99]}, east: {uv: [12.01, 2.01, 13.99, 3.99] }, west: {uv: [8.01, 2.01, 9.99, 3.99] }, down: {uv: [12.01, 1.99, 13.99, 0.01]}, up: {uv: [10.01, 0.01, 11.99, 1.99]}}}).addTo(steveGroup)
        var steveBody2 = new Cube({name: 'body_2nd_layer', from: [4.0, 11.02, 5.51], to: [12.0, 24.03, 10.51], display: {autouv: false}, faces: {north: {uv: [8.01, 9.01, 9.99, 11.99]}, south: {uv: [5.01, 9.01, 6.99, 11.99]}, east: {uv: [7.01, 9.01, 7.99, 11.99] }, west: {uv: [4.01, 9.01, 4.99, 11.99] }, down: {uv: [7.01, 8.99, 8.99, 8.01]}, up: {uv: [5.01, 8.01, 6.99, 8.99]}}}).addTo(steveGroup)
        var steveRightArm2 = new Cube({name: 'right_arm_2nd_layer', from: [-0.5, 11.0, 5.499999992549419], to: [4.49, 24.0, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [13.01, 9.01, 13.99, 11.99]}, south: {uv: [11.01, 9.01, 11.99, 11.99]}, east: {uv: [12, 9, 12.9796875, 11.9796875] }, west: {uv: [10.01, 9.01, 10.99, 11.99] }, down: {uv: [12.01, 8.99, 12.99, 8.01]}, up: {uv: [11.01, 8.01, 11.99, 8.99]}}}).addTo(steveGroup)
        var steveLeftArm2 = new Cube({name: 'left_arm_2nd_layer', from: [11.49999999254942, 10.99999999254942, 5.499999992549419], to: [16.49999999254942, 23.99999999254942, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [15.01, 13.01, 15.99, 15.99]}, south: {uv: [13.01, 13.01, 13.99, 15.99]}, east: {uv: [14.01, 13.01, 14.99, 15.99] }, west: {uv: [12.01, 13.01, 12.9896875, 15.9896875] }, down: {uv: [14.01, 12.99, 14.99, 12.01]}, up: {uv: [13.01, 12.01, 13.99, 12.99]}}}).addTo(steveGroup)
        var steveRightLeg2 = new Cube({name: 'right_leg_2nd_layer', from: [3.4999999925494194, -1.0000000074505806, 5.499999992549419], to: [8.49999999254942, 11.99999999254942, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [3.01, 9.01, 3.99, 11.99]}, south: {uv: [1.01, 9.01, 1.99, 11.99]}, east: {uv: [2.01, 9.01, 2.99, 11.99] }, west: {uv: [0.01, 9.01, 0.99, 11.99] }, down: {uv: [2.01, 9.01, 2.99, 7.99]}, up: {uv: [1.0099999999999998, 7.99, 1.9900000000000002, 9.01]}}}).addTo(steveGroup)
        var steveLeftLeg2 = new Cube({name: 'left_leg_2nd_layer', from: [7.499999992549419, -1.0000000074505806, 5.499999992549419], to: [12.49999999254942, 11.99999999254942, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [3.01, 13.01, 3.99, 15.99]}, south: {uv: [1.01, 13.01, 1.99, 15.99]}, east: {uv: [2.01, 13.01, 2.99, 15.99] }, west: {uv: [0.01, 13.01, 0.99, 15.99] }, down: {uv: [2.01, 13.009999999999998, 2.99, 11.99]}, up: {uv: [1.0099999999999998, 11.99, 1.9900000000000002, 13.009999999999998]}}}).addTo(steveGroup)
        elements.push(steveLeftLeg2)
        elements.push(steveRightLeg2)
        elements.push(steveLeftArm2)
        elements.push(steveRightArm2)
        elements.push(steveBody2)
        elements.push(steveHead2)
    }
    setDisplay()
    playerModelSettings.hide()
    Canvas.updateAll()
    steveGroup.openUp().select()
}

function generateAlex(){
    alexGroup = new Group('alex').addTo('root')
    var steveRightLeg = new Cube({name: 'right_leg', from: [4.0, -0.5, 6.0], to: [8.0, 11.5, 10.0], display: {autouv: false}, faces: {north: {uv: [3.01, 5.01, 3.99, 7.99]}, south: {uv: [1.01, 5.01, 1.99, 7.99]}, east: {uv: [2.01, 5.01, 2.99, 7.99] }, west: {uv: [0.01, 5.01, 0.99, 7.99] }, down: {uv: [2.01, 4.99, 2.99, 4.01]}, up: {uv: [1.01, 4.01, 1.99, 4.99]}}}).addTo(alexGroup)
    var steveLeftLeg = new Cube({name: 'left_leg', from: [8.0, -0.5, 6.0], to: [12.0, 11.5, 10.0], display: {autouv: false}, faces: {north: {uv: [8.01, 13.01, 6.99, 15.99]}, south: {uv: [5.01, 13.01, 5.99, 15.99]}, east: {uv: [6.01, 13.01, 6.99, 15.99] }, west: {uv: [4.01, 13.01, 4.99, 15.99] }, down: {uv: [6.01, 12.99, 6.99, 12.01]}, up: {uv: [5.01, 12.01, 5.99, 12.99]}}}).addTo(alexGroup)
    var steveBody = new Cube({name: 'body', from: [4.0, 11.5, 6.0], to: [12.0, 23.5, 10.0], display: {autouv: false}, faces: {north: {uv: [8.01, 5.01, 9.99, 7.99]}, south: {uv: [5.01, 5.01, 6.99, 7.99]}, east: {uv: [7.01, 5.01, 7.99, 7.99] }, west: {uv: [4.01, 5.01, 4.99, 7.99] }, down: {uv: [7.01, 4.99, 8.99, 4.01]}, up: {uv: [5.01, 4.01, 6.99, 4.99]}}}).addTo(alexGroup)
    var steveHead = new Cube({name: 'head', from: [4.0, 23.5, 4.0], to: [12.0, 31.5, 12.0], display: {autouv: false}, faces: {north: {uv: [6.009375, 2.009375, 7.9890625, 3.9890625]}, south: {uv: [2.01, 2.01, 3.99, 3.99]}, east: {uv: [4.01, 2.01, 5.99, 3.99] }, west: {uv: [0.01, 2.01, 1.99, 3.99] }, down: {uv: [4.01, 1.99, 5.99, 0.01]}, up: {uv: [2.01, 0.01, 3.99, 1.99]}}}).addTo(alexGroup)
    var alexRightArm = new Cube({name: 'right_arm', from: [1, 11.5, 6], to: [4, 23.5, 10], display: {autouv: false}, faces: {north: {uv: [12.755, 5.005, 13.495000000000001, 7.995]}, south: {uv: [11.005, 5.005, 11.745000000000001, 7.995]}, east: {uv: [12.005, 5.005, 12.995000000000001, 7.995] }, west: {uv: [10.005, 5.005, 10.995000000000001, 7.995] }, down: {uv: [11.755, 4.995, 12.495000000000001, 4.005]}, up: {uv: [11.0046875, 4.0046875, 11.74453125, 4.9945312500000005]}}}).addTo(alexGroup)
    var alexLeftArm = new Cube({name: 'left_arm', from: [12, 11.5, 6], to: [15, 23.5, 10], display: {autouv: false}, faces: {north: {uv: [10.755, 13.005, 11.495000000000001, 15.995000000000001]}, south: {uv: [9.005, 13.005, 9.745000000000001, 15.995000000000001]}, east: {uv: [9.755, 13.005, 10.745000000000001, 15.995000000000001] }, west: {uv: [8.005, 13.005, 8.995000000000001, 15.995000000000001] }, down: {uv: [9.755, 12.995000000000001, 10.495000000000001, 12.005]}, up: {uv: [9.005, 12.005, 9.745000000000001, 12.995000000000001]}}}).addTo(alexGroup)
    elements.push(alexLeftArm)
    elements.push(alexRightArm)
    elements.push(steveHead)
    elements.push(steveLeftLeg)
    elements.push(steveRightLeg)
    elements.push(steveBody)

    if ($('#second_layer').checked = true) {
        var steveHead2 = new Cube({name: 'head_2nd_layer', from: [3.5, 23.0, 3.5], to: [12.5, 32.0, 12.5], display: {autouv: false}, faces: {north: {uv: [14.01, 2.01, 15.99, 3.99]}, south: {uv: [10.01, 2.01, 11.99, 3.99]}, east: {uv: [12.01, 2.01, 13.99, 3.99] }, west: {uv: [8.01, 2.01, 9.99, 3.99] }, down: {uv: [12.01, 1.99, 13.99, 0.01]}, up: {uv: [10.01, 0.01, 11.99, 1.99]}}}).addTo(alexGroup)
        var steveBody2 = new Cube({name: 'body_2nd_layer', from: [4.0, 11.02, 5.51], to: [12.0, 24.03, 10.51], display: {autouv: false}, faces: {north: {uv: [8.01, 9.01, 9.99, 11.99]}, south: {uv: [5.01, 9.01, 6.99, 11.99]}, east: {uv: [7.01, 9.01, 7.99, 11.99] }, west: {uv: [4.01, 9.01, 4.99, 11.99] }, down: {uv: [7.01, 8.99, 8.99, 8.01]}, up: {uv: [5.01, 8.01, 6.99, 8.99]}}}).addTo(alexGroup)
        var steveRightLeg2 = new Cube({name: 'right_leg_2nd_layer', from: [3.4999999925494194, -1.0000000074505806, 5.499999992549419], to: [8.49999999254942, 11.99999999254942, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [3.01, 9.01, 3.99, 11.99]}, south: {uv: [1.01, 9.01, 1.99, 11.99]}, east: {uv: [2.01, 9.01, 2.99, 11.99] }, west: {uv: [0.01, 9.01, 0.99, 11.99] }, down: {uv: [2.01, 9.01, 2.99, 7.99]}, up: {uv: [1.0099999999999998, 7.99, 1.9900000000000002, 9.01]}}}).addTo(alexGroup)
        var steveLeftLeg2 = new Cube({name: 'left_leg_2nd_layer', from: [7.499999992549419, -1.0000000074505806, 5.499999992549419], to: [12.49999999254942, 11.99999999254942, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [3.01, 13.01, 3.99, 15.99]}, south: {uv: [1.01, 13.01, 1.99, 15.99]}, east: {uv: [2.01, 13.01, 2.99, 15.99] }, west: {uv: [0.01, 13.01, 0.99, 15.99] }, down: {uv: [2.01, 13.009999999999998, 2.99, 11.99]}, up: {uv: [1.0099999999999998, 11.99, 1.9900000000000002, 13.009999999999998]}}}).addTo(alexGroup)
        var alexRightArm2 = new Cube({name: 'right_arm_2nd_layer', from: [0.5, 11, 5.499999992549419], to: [4.5, 24, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [12.755, 9.005, 13.495000000000001, 11.995000000000001]}, south: {uv: [11, 9, 11.74, 11.995000000000001]}, east: {uv: [11.75, 9, 12.74, 11.995000000000001] }, west: {uv: [10, 9, 10.99, 11.995000000000001] }, down: {uv: [11.7546875, 8.99453125, 12.49453125, 8.0046875]}, up: {uv: [11.0046875, 8.0046875, 11.74453125, 8.99453125]}}}).addTo(alexGroup)
        var alexLeftArm2 = new Cube({name: 'left_arm_2nd_layer', from: [11.49999999254942, 10.99999999254942, 5.499999992549419], to: [15.49999999254942, 23.99999999254942, 10.49999999254942], display: {autouv: false}, faces: {north: {uv: [14.755, 13.005, 15.495000000000001, 15.995000000000001]}, south: {uv: [13.055, 13.005, 13.805, 15.995000000000001]}, east: {uv: [13.755, 13.005, 14.745000000000001, 15.995000000000001] }, west: {uv: [12, 13, 12.99, 15.99] }, down: {uv: [13.7546875, 12.99453125, 14.49453125, 12.0046875]}, up: {uv: [13.005, 12.005, 13.7, 12.995000000000001]}}}).addTo(alexGroup)
        elements.push(alexLeftArm2)
        elements.push(alexRightArm2)
        elements.push(steveLeftLeg2)
        elements.push(steveRightLeg2)
        elements.push(steveBody2)
        elements.push(steveHead2)
    }
    setDisplay()
    playerModelSettings.hide()
    Canvas.updateAll()
    alexGroup.openUp().select()
}

function generateCape(){
    var cape = new Cube({
        name: 'cape',
        from: [2.5, 6, 13],
        to: [13.5, 23, 14],
        autouv: 0,
        faces: {
            north: {
                uv: [0.5, 0.5, 6, 9]
            },
            south: {
                uv: [6.5, 0.5, 12, 9]
            },
            west: {
                uv: [6, 0.5, 6.5, 9]
            },
            east: {
                uv: [0, 0.5, 0.5, 9]
            },
            up: {
                uv: [6, 0.5, 0.5, 0]
            },
            down: {
                uv: [11.5, 0, 6, 0.5]
            }
        },
        rotation: [-22.5, 0, 0],
        origin: [7.5, 14, 10.5]
    }).addTo()
    elements.push(cape)
    Canvas.updateAll()
    setDisplay()
}

playerModelSettings.onConfirm = function() {
    switch($('#player_model_list')[0].value) {
        case 'steve':
        generateSteve()
        break;
        case 'alex':
        generateAlex()
        break;
        case 'cape':
        capeInfo.show();
        break;
    }
}
capeInfo.onConfirm = function() {
    playerModelSettings.hide()
    capeInfo.hide()
    generateCape()
}

onUninstall = function() {
	Toolbars.outliner.remove('generate_player_model')
}