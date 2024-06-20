<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp5663588' );

/** Database username */
define( 'DB_USER', 'wpuser77211' );

/** Database password */
define( 'DB_PASSWORD', 'JsDxaXO3eBedefM' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Ucun^Ga-Z!<.*fm|uDZWbxJxhQ}Wq&<Yc*CKWA^:jeT],s7xbe(__kUO }JhVyx2' );
define( 'SECURE_AUTH_KEY',   'MGo&O:EEO1Z@9tq<UCZEnNlP)v~<e`R0V?[TT1AbR!h8DE;fl8Se{q14/b|~:x[6' );
define( 'LOGGED_IN_KEY',     'wok87Nps3mj*kvC6=fXbeE2Kl4lJ$U^6~Ufa,(>S}7Da1{7lqGWx[Zf(Q6>U-L.?' );
define( 'NONCE_KEY',         'zeN$Uh~MDI43ntlk~@)#-G3gf gtR]D;QBK7`axd&rloS_+*fDR}PqL`1z<8Xy`P' );
define( 'AUTH_SALT',         'C|Q62?Rk7shI(NouHR He-Cw]E7ADw3]A $9auq>=Y^>%e5[TRf!r< R%WtiTw![' );
define( 'SECURE_AUTH_SALT',  'A#<+,fSg1mm$Cjl[f.ev._tK@O~li#0^[FVBFFK3%mE#Oi~3o8hWORb1/~{,sO52' );
define( 'LOGGED_IN_SALT',    ',Q%W,Nz<bb@[I@&R,IGS>Ets!Yr]s4!eK)sh)8hT1>TV+t!n[>i^Tj&yw<6o#rAT' );
define( 'NONCE_SALT',        'Mmvn1^zBQkH5o{Q#C.+i+OF|@*V<.l:XJO-2HWn3y<x<K~/05[V&dn*mB& `}Xvc' );
define( 'WP_CACHE_KEY_SALT', 'bGSuanKNWX@L,kHiG&GK8){>?yc#$H@,!,k/~,nDOuK}hUW~E6.e/br1LU>ur&ZD' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */

define( 'FORCE_SSL_ADMIN', false );
define( 'FS_METHOD' , 'direct' );
if (! defined('WFWAF_STORAGE_ENGINE')) { define('WFWAF_STORAGE_ENGINE', 'mysqli'); }


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
