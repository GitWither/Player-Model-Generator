
var plugin_data = {

	id: 'player_model_generator',
	title: 'Player Model Generator Test',  
	icon: 'accessibility',
	author: 'Wither and dragonmaster95',
	description: 'This plugin lets you easily generate a player shaped model. Go to Edit - Plugin and select the model you wish.',
	version: '0.0.2',
	variant: 'both'
}

if (!display.head) {
    display.head = {}
}

//model entries
//CAPE
Blockbench.addMenuEntry('Create Cape','turned_in', function(){
	var confirmation = new Dialog({title:'Cape Texture Warning',id:"cape_texture_warning",lines:['Your might need to edit your cape texture<br /> to a square format(32x32) to make it work in-game!<br /> ','<span style="text-decoration: underline;"><a class="open-in-browser" href="https://github.com/GitWither/Player-Model-Generator/blob/master/cape_texture.png" target="_blank">Click here</a></span>',' to get the texture template.'],draggable:true,onConfirm() {
		hideDialog()
		generateCape()
	}})
	confirmation.show()
})

//THICK ARMS
Blockbench.addMenuEntry('Create Steve Model', 'accessibility', function() {
    generateSteve()  
})

//THIN ARMS
Blockbench.addMenuEntry('Create Alex Model', 'accessibility', function() {
    generateAlex()
})

function generateSteve(){
    //loading message
	Blockbench.showMessage('Generating model... Please wait', 'center')

	//right leg
	var steveModel = addCube()
    steveModel.from = [4.0, -0.5, 6.0]
    steveModel.to = [8.0, 11.5, 10.0]
    steveModel.name = "steve_right_leg"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [3.01, 5.01, 3.99, 7.99]
    steveModel.faces.east.uv = [2.01, 5.01, 2.99, 7.99]
    steveModel.faces.south.uv = [1.01, 5.01, 1.99, 7.99]
    steveModel.faces.west.uv = [0.01, 5.01, 0.99, 7.99]
    steveModel.faces.up.uv = [1.01, 4.01, 1.99, 4.99]
    steveModel.faces.down.uv = [2.01, 4.99, 2.99, 4.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left leg
    var steveModel = addCube()
    steveModel.from = [8.0, -0.5, 6.0]
    steveModel.to = [12.0, 11.5, 10.0]
    steveModel.name = "steve_left_leg"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [8.01, 13.01, 6.99, 15.99]
    steveModel.faces.east.uv = [6.01, 13.01, 6.99, 15.99]
    steveModel.faces.south.uv = [5.01, 13.01, 5.99, 15.99]
    steveModel.faces.west.uv = [4.01, 13.01, 4.99, 15.99]
    steveModel.faces.up.uv = [5.01, 12.01, 5.99, 12.99]
    steveModel.faces.down.uv = [6.01, 12.99, 6.99, 12.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //body
    var steveModel = addCube()
    steveModel.from = [4.0, 11.5, 6.0]
    steveModel.to = [12.0, 23.5, 10.0]
    steveModel.name = "steve_body"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [8.01, 5.01, 9.99, 7.99]
    steveModel.faces.east.uv = [7.01, 5.01, 7.99, 7.99]
    steveModel.faces.south.uv = [5.01, 5.01, 6.99, 7.99]
    steveModel.faces.west.uv = [4.01, 5.01, 4.99, 7.99]
    steveModel.faces.up.uv = [5.01, 4.01, 6.99, 4.99]
    steveModel.faces.down.uv = [7.01, 4.99, 8.99, 4.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //head
    var steveModel = addCube()
    steveModel.from = [4.0, 23.5, 4.0]
    steveModel.to = [12.0, 31.5, 12.0]
    steveModel.name = "steve_head"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [6.009375, 2.009375, 7.9890625, 3.9890625]
    steveModel.faces.east.uv = [4.01, 2.01, 5.99, 3.99]
    steveModel.faces.south.uv = [2.01, 2.01, 3.99, 3.99]
    steveModel.faces.west.uv = [0.01, 2.01, 1.99, 3.99]
    steveModel.faces.up.uv = [2.01, 0.01, 3.99, 1.99]
    steveModel.faces.down.uv = [4.01, 1.99, 5.99, 0.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //right arm
    var steveModel = addCube()
    steveModel.from = [0.0, 11.5, 6.0]
    steveModel.to = [4.0, 23.5, 10.0]
    steveModel.name = "steve_right_arm"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [13.01, 5.01, 13.99, 7.99]
    steveModel.faces.east.uv = [12.01, 5.01, 12.99, 7.99]
    steveModel.faces.south.uv = [11.01, 5.01, 11.99, 7.99]
    steveModel.faces.west.uv = [10.01, 5.01, 10.99, 7.99]
    steveModel.faces.up.uv = [11.01, 4.01, 11.99, 4.99]
    steveModel.faces.down.uv = [12.01, 4.99, 12.99, 4.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left arm
    var steveModel = addCube()
    steveModel.from = [12.0, 11.5, 6.0]
    steveModel.to = [16.0, 23.5, 10.0]
    steveModel.name = "steve_left_arm"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [11.01, 13.01, 11.99, 15.99]
    steveModel.faces.east.uv = [10.01, 13.01, 10.99, 15.99]
    steveModel.faces.south.uv = [9.01, 13.01, 9.99, 15.99]
    steveModel.faces.west.uv = [8.01, 13.01, 8.99, 15.99]
    steveModel.faces.up.uv = [9.01, 12.01, 9.99, 12.99]
    steveModel.faces.down.uv = [10.01, 12.99, 10.99, 12.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //2nd layers
    //head
    var steveModel = addCube()
    steveModel.from = [3.5, 23.0, 3.5]
    steveModel.to = [12.5, 32.0, 12.5]
    steveModel.name = "steve_head_2nd_layer"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [14.01, 2.01, 15.99, 3.99]
    steveModel.faces.east.uv = [12.01, 2.01, 13.99, 3.99]
    steveModel.faces.south.uv = [10.01, 2.01, 11.99, 3.99]
    steveModel.faces.west.uv = [8.01, 2.01, 9.99, 3.99]
    steveModel.faces.up.uv = [10.01, 0.01, 11.99, 1.99]
    steveModel.faces.down.uv = [12.01, 1.99, 13.99, 0.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //body
    var steveModel = addCube()
    steveModel.from = [4.0, 11.02, 5.51]
    steveModel.to = [12.0, 24.03, 10.51]
    steveModel.name = "steve_body_2nd_layer"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [8.01, 9.01, 9.99, 11.99]
    steveModel.faces.east.uv = [7.01, 9.01, 7.99, 11.99]
    steveModel.faces.south.uv = [5.01, 9.01, 6.99, 11.99]
    steveModel.faces.west.uv = [4.01, 9.01, 4.99, 11.99]
    steveModel.faces.up.uv = [5.01, 8.01, 6.99, 8.99]
    steveModel.faces.down.uv = [7.01, 8.99, 8.99, 8.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //right arm
    var steveModel = addCube()
    steveModel.from = [-0.5, 11.0, 5.499999992549419]
    steveModel.to = [4.49, 24.0, 10.49999999254942]
    steveModel.name = "steve_right_arm_2nd_layer"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [13.01, 9.01, 13.99, 11.99]
    steveModel.faces.east.uv = [12, 9, 12.9796875, 11.9796875]
    steveModel.faces.south.uv = [11.01, 9.01, 11.99, 11.99]
    steveModel.faces.west.uv = [10.01, 9.01, 10.99, 11.99]
    steveModel.faces.up.uv = [11.01, 8.01, 11.99, 8.99]
    steveModel.faces.down.uv = [12.01, 8.99, 12.99, 8.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left arm
    var steveModel = addCube()
    steveModel.from = [11.49999999254942, 10.99999999254942, 5.499999992549419]
    steveModel.to = [16.49999999254942, 23.99999999254942, 10.49999999254942]
    steveModel.name = "steve_left_arm_2nd_layer"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [15.01, 13.01, 15.99, 15.99]
    steveModel.faces.east.uv = [14.01, 13.01, 14.99, 15.99]
    steveModel.faces.south.uv = [13.01, 13.01, 13.99, 15.99]
    steveModel.faces.west.uv = [12.01, 13.01, 12.9896875, 15.9896875]
    steveModel.faces.up.uv = [13.01, 12.01, 13.99, 12.99]
    steveModel.faces.down.uv = [14.01, 12.99, 14.99, 12.01]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //right leg
    var steveModel = addCube()
    steveModel.from = [3.4999999925494194, -1.0000000074505806, 5.499999992549419]
    steveModel.to = [8.49999999254942, 11.99999999254942, 10.49999999254942]
    steveModel.name = "steve_right_leg_2nd_layer"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [3.01, 9.01, 3.99, 11.99]
    steveModel.faces.east.uv = [2.01, 9.01, 2.99, 11.99]
    steveModel.faces.south.uv = [1.01, 9.01, 1.99, 11.99]
    steveModel.faces.west.uv = [0.01, 9.01, 0.99, 11.99]
	steveModel.faces.up.uv = [1.0099999999999998, 7.99, 1.9900000000000002, 9.01]
    steveModel.faces.down.uv = [2.01, 9.01, 2.99, 7.99]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left leg
    var steveModel = addCube()
    steveModel.from = [7.499999992549419, -1.0000000074505806, 5.499999992549419]
    steveModel.to = [12.49999999254942, 11.99999999254942, 10.49999999254942]
    steveModel.name = "steve_left_leg_2nd_layer"
    steveModel.display.autouv = false
    steveModel.faces.north.uv = [3.01, 13.01, 3.99, 15.99]
    steveModel.faces.east.uv = [2.01, 13.01, 2.99, 15.99]
    steveModel.faces.south.uv = [1.01, 13.01, 1.99, 15.99]
    steveModel.faces.west.uv = [0.01, 13.01, 0.99, 15.99]
	steveModel.faces.up.uv = [1.0099999999999998, 11.99, 1.9900000000000002, 13.009999999999998]
    steveModel.faces.down.uv = [2.01, 13.009999999999998, 2.99, 11.99]
    steveModel.faces.north.texture = '#0'
    steveModel.faces.east.texture = '#0'
    steveModel.faces.south.texture = '#0'
    steveModel.faces.west.texture = '#0'
    steveModel.faces.up.texture = '#0'
    steveModel.faces.down.texture = '#0'
    Canvas.updatePositions()
    //edit
    Blockbench.registerEdit('Generated Steve Model')
    //display settings
    display['head'].scale = [1.6, 1.6, 1.6]
    display['head'].translation = [0, -29.5, 0]
    loadSlot('head')
}

function generateAlex(){
    //loading message
	Blockbench.showMessage('Generating model... Please wait', 'center')

	//right leg
	var alexModel = addCube()
    alexModel.from = [4.0, -0.5, 6.0]
    alexModel.to = [8.0, 11.5, 10.0]
    alexModel.name = "alex_right_leg"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [3.01, 5.01, 3.99, 7.99]
    alexModel.faces.east.uv = [2.01, 5.01, 2.99, 7.99]
    alexModel.faces.south.uv = [1.01, 5.01, 1.99, 7.99]
    alexModel.faces.west.uv = [0.01, 5.01, 0.99, 7.99]
    alexModel.faces.up.uv = [1.01, 4.01, 1.99, 4.99]
    alexModel.faces.down.uv = [2.01, 4.99, 2.99, 4.01]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left leg
    var alexModel = addCube()
    alexModel.from = [8.0, -0.5, 6.0]
    alexModel.to = [12.0, 11.5, 10.0]
    alexModel.name = "alex_left_leg"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [8.01, 13.01, 6.99, 15.99]
    alexModel.faces.east.uv = [6.01, 13.01, 6.99, 15.99]
    alexModel.faces.south.uv = [5.01, 13.01, 5.99, 15.99]
    alexModel.faces.west.uv = [4.01, 13.01, 4.99, 15.99]
    alexModel.faces.up.uv = [5.01, 12.01, 5.99, 12.99]
    alexModel.faces.down.uv = [6.01, 12.99, 6.99, 12.01]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //body
    var alexModel = addCube()
    alexModel.from = [4.0, 11.5, 6.0]
    alexModel.to = [12.0, 23.5, 10.0]
    alexModel.name = "alex_body"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [8.01, 5.01, 9.99, 7.99]
    alexModel.faces.east.uv = [7.01, 5.01, 7.99, 7.99]
    alexModel.faces.south.uv = [5.01, 5.01, 6.99, 7.99]
    alexModel.faces.west.uv = [4.01, 5.01, 4.99, 7.99]
    alexModel.faces.up.uv = [5.01, 4.01, 6.99, 4.99]
    alexModel.faces.down.uv = [7.01, 4.99, 8.99, 4.01]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //head
    var alexModel = addCube()
    alexModel.from = [4.0, 23.5, 4.0]
    alexModel.to = [12.0, 31.5, 12.0]
    alexModel.name = "alex_head"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [6.009375, 2.009375, 7.9890625, 3.9890625]
    alexModel.faces.east.uv = [4.01, 2.01, 5.99, 3.99]
    alexModel.faces.south.uv = [2.01, 2.01, 3.99, 3.99]
    alexModel.faces.west.uv = [0.01, 2.01, 1.99, 3.99]
    alexModel.faces.up.uv = [2.01, 0.01, 3.99, 1.99]
    alexModel.faces.down.uv = [4.01, 1.99, 5.99, 0.01]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //right arm
    var alexModel = addCube()
    alexModel.from = [1, 11.5, 6]
    alexModel.to = [4, 23.5, 10]
    alexModel.name = "alex_right_arm"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [12.755, 5.005, 13.495000000000001, 7.995]
    alexModel.faces.east.uv = [12.005, 5.005, 12.995000000000001, 7.995]
    alexModel.faces.south.uv = [11.005, 5.005, 11.745000000000001, 7.995]
    alexModel.faces.west.uv = [10.005, 5.005, 10.995000000000001, 7.995]
    alexModel.faces.up.uv = [11.0046875, 4.0046875, 11.74453125, 4.9945312500000005]
    alexModel.faces.down.uv = [11.755, 4.995, 12.495000000000001, 4.005]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left arm
    var alexModel = addCube()
    alexModel.from = [12, 11.5, 6]
    alexModel.to = [15, 23.5, 10]
    alexModel.name = "alex_left_arm"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [10.755, 13.005, 11.495000000000001, 15.995000000000001]
    alexModel.faces.east.uv = [9.755, 13.005, 10.745000000000001, 15.995000000000001]
    alexModel.faces.south.uv = [9.005, 13.005, 9.745000000000001, 15.995000000000001]
    alexModel.faces.west.uv = [8.005, 13.005, 8.995000000000001, 15.995000000000001]
    alexModel.faces.up.uv = [9.005, 12.005, 9.745000000000001, 12.995000000000001]
    alexModel.faces.down.uv = [9.755, 12.995000000000001, 10.495000000000001, 12.005]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //2nd layers
    //head
    var alexModel = addCube()
    alexModel.from = [3.5, 23.0, 3.5]
    alexModel.to = [12.5, 32.0, 12.5]
    alexModel.name = "alex_head_2nd_layer"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [14.01, 2.01, 15.99, 3.99]
    alexModel.faces.east.uv = [12.01, 2.01, 13.99, 3.99]
    alexModel.faces.south.uv = [10.01, 2.01, 11.99, 3.99]
    alexModel.faces.west.uv = [8.01, 2.01, 9.99, 3.99]
    alexModel.faces.up.uv = [10.01, 0.01, 11.99, 1.99]
    alexModel.faces.down.uv = [12.01, 1.99, 13.99, 0.01]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //body
    var alexModel = addCube()
    alexModel.from = [4.0, 11.02, 5.51]
    alexModel.to = [12.0, 24.03, 10.51]
    alexModel.name = "alex_body_2nd_layer"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [8.01, 9.01, 9.99, 11.99]
    alexModel.faces.east.uv = [7.01, 9.01, 7.99, 11.99]
    alexModel.faces.south.uv = [5.01, 9.01, 6.99, 11.99]
    alexModel.faces.west.uv = [4.01, 9.01, 4.99, 11.99]
    alexModel.faces.up.uv = [5.01, 8.01, 6.99, 8.99]
    alexModel.faces.down.uv = [7.01, 8.99, 8.99, 8.01]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //right arm
    var alexModel = addCube()
    alexModel.from = [0.5, 11, 5.499999992549419]
    alexModel.to = [4.5, 24, 10.49999999254942]
    alexModel.name = "alex_right_arm_2nd_layer"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [12.755, 9.005, 13.495000000000001, 11.995000000000001]
    alexModel.faces.east.uv = [11.75, 9, 12.74, 11.995000000000001]
    alexModel.faces.south.uv = [11, 9, 11.74, 11.995000000000001]
    alexModel.faces.west.uv = [10, 9, 10.99, 11.995000000000001]
    alexModel.faces.up.uv = [11.0046875, 8.0046875, 11.74453125, 8.99453125]
    alexModel.faces.down.uv = [11.7546875, 8.99453125, 12.49453125, 8.0046875]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left arm
    var alexModel = addCube()
    alexModel.from = [11.49999999254942, 10.99999999254942, 5.499999992549419]
    alexModel.to = [15.49999999254942, 23.99999999254942, 10.49999999254942]
    alexModel.name = "alex_left_arm_2nd_layer"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [14.755, 13.005, 15.495000000000001, 15.995000000000001]
    alexModel.faces.east.uv = [13.755, 13.005, 14.745000000000001, 15.995000000000001]
    alexModel.faces.south.uv = [13.055, 13.005, 13.805, 15.995000000000001]
    alexModel.faces.west.uv = [12, 13, 12.99, 15.99]
    alexModel.faces.up.uv = [13.005, 12.005, 13.7, 12.995000000000001]
    alexModel.faces.down.uv = [13.7546875, 12.99453125, 14.49453125, 12.0046875]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //right leg
    var alexModel = addCube()
    alexModel.from = [3.4999999925494194, -1.0000000074505806, 5.499999992549419]
    alexModel.to = [8.49999999254942, 11.99999999254942, 10.49999999254942]
    alexModel.name = "alex_right_leg_2nd_layer"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [3.01, 9.01, 3.99, 11.99]
    alexModel.faces.east.uv = [2.01, 9.01, 2.99, 11.99]
    alexModel.faces.south.uv = [1.01, 9.01, 1.99, 11.99]
    alexModel.faces.west.uv = [0.01, 9.01, 0.99, 11.99]
	alexModel.faces.up.uv = [1.0099999999999998, 7.99, 1.9900000000000002, 9.01]
    alexModel.faces.down.uv = [2.01, 9.01, 2.99, 7.99]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()

    //left leg
    var alexModel = addCube()
    alexModel.from = [7.499999992549419, -1.0000000074505806, 5.499999992549419]
    alexModel.to = [12.49999999254942, 11.99999999254942, 10.49999999254942]
    alexModel.name = "alex_left_leg_2nd_layer"
    alexModel.display.autouv = false
    alexModel.faces.north.uv = [3.01, 13.01, 3.99, 15.99]
    alexModel.faces.east.uv = [2.01, 13.01, 2.99, 15.99]
    alexModel.faces.south.uv = [1.01, 13.01, 1.99, 15.99]
    alexModel.faces.west.uv = [0.01, 13.01, 0.99, 15.99]
	alexModel.faces.up.uv = [1.0099999999999998, 11.99, 1.9900000000000002, 13.009999999999998]
    alexModel.faces.down.uv = [2.01, 13.009999999999998, 2.99, 11.99]
    alexModel.faces.north.texture = '#0'
    alexModel.faces.east.texture = '#0'
    alexModel.faces.south.texture = '#0'
    alexModel.faces.west.texture = '#0'
    alexModel.faces.up.texture = '#0'
    alexModel.faces.down.texture = '#0'
    Canvas.updatePositions()
    //edit
    Blockbench.registerEdit('Generated Alex Model')
    //display settings
    display['head'].scale = [1.6, 1.6, 1.6]
    display['head'].translation = [0, -29.5, 0]
    loadSlot('head')
}

function generateCape(){
    //loading message
    Blockbench.showMessage('Generating Cape Model','center')
    //cape element creation
    var cape = addCube()
    cape.name = 'cape'
    cape.from = [2.5, 6, 2]
    cape.to = [13.5, 23, 3]
    cape.display.autouv = false
    cape.faces.north.uv = [0.4997140984786184, 0.49971369693153783, 5.499245091488486, 8.449713696931537]
    cape.faces.east.uv = [0, 0.4997138977050781, 0.47, 8.498963807758532]
    cape.faces.south.uv = [5.999916478207237, 0.4997138977050781, 10.99896882709704, 8.498963807758532]
    cape.faces.west.uv = [5.499245091488487, 0.4997138977050781, 5.998958888806795, 8.498963807758532]
    cape.faces.up.uv = [0.4997140984786184, 0, 5.49876644736842, 0.49971379731830795]
    cape.faces.down.uv = [5.498766447368421, 0.49971379731830795, 10.497818796258223, 0]
    cape.faces.north.texture = '#1'
    cape.faces.east.texture = '#1'
    cape.faces.south.texture = '#1'
    cape.faces.west.texture = '#1'
    cape.faces.up.texture = '#1'
    cape.faces.down.texture = '#1'
    cape.rotation = {origin: [7.5, 14, 5.5], axis: 'x', angle:22.5}
    Canvas.updatePositions()
    //edit
    Blockbench.registerEdit('Generated Cape Model')
    //display settings
    display['head'].scale = [1.6, 1.6, 1.6]
    display['head'].translation = [0, -29.5, 0]
    loadSlot('head')
}


var onInstall = function() {

    //Welcome message
    Blockbench.showMessage('Thank you for installing my plugin!', 'center')

}

onUninstall = function() {
	//Goodbye message and remove entries
	Blockbench.removeMenuEntry('Create Steve Model')
	Blockbench.removeMenuEntry('Create Alex Model')
	Blockbench.removeMenuEntry('Create Cape')
	Blockbench.showMessage('Thanks for using my plugin!', 'center')
}