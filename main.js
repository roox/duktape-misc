var module = $loadlib("test")
var test = module()

print("test module:" + !!(test))
// print(Duktape.enc('jx', test))

print("io module:" + !!(io))
// print(Duktape.enc('jx', io))

print('-------------------------------------------')

/*
// --------------------------------------------------------

var OUT_FILE = "test.txt"

print('writing '+OUT_FILE)
var outputf = io.open(OUT_FILE, "w")

for (var i = 0; i < 24; i++) {
	for (var j = 0; j < i; j++) {
		outputf.puts('\t')
	}
	outputf.puts(test.hello())
	outputf.puts('\n')
}

outputf = null

// --------------------------------------------------------

var byteNumber = 100
var IN_FILE = "test.txt"

print('reading '+ byteNumber + ' bytes from ' + IN_FILE)
var inputf = io.open(IN_FILE, 'r')

print(inputf.gets())

inputf.rewind()

var bytes = inputf.read(byteNumber)

print("buffer: ", toString.call(bytes))
print("'" + bytes.toString() + "'")

print("next character: " + inputf.getc())
print('-------------------------------------------')

// --------------------------------------------------------

var IN_FILE = "test.txt"

var inputf = io.open(IN_FILE, 'r')

print("file size (in bytes): " + inputf.size())

var contents = inputf.readAll()
print("file length: " + contents.toString().length)

*/

// --------------------------------------------------------

var FILENAME = "test.txt"

io.writeFile(FILENAME, "there is no spoon\nbiatches!")

var contents = io.readFile(FILENAME)
print(FILENAME + ': ' + contents.toString().length + " bytes")
print(contents.toString())