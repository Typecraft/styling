// This file allows other modules to import the gobi styles using ES&
// webpack css imports

if (process.env.USE_GOBI_MINIFIED !== 'false' || process.env.NODE_ENV === 'production') {
  import './build/typecraft.min.css'
} else {
  import './build/typecraft.css'
}
